import { div } from "./type";

export default function calc() {
    const gender: div = document.querySelector("#gender");
    const baseParams: div = document.querySelector(".calculating__choose_medium");
    const activity: div = document.querySelector(".calculating__choose_big");
    const activitys: NodeListOf<Element> = document.querySelectorAll(".calculating__choose_big .calculating__choose-item");

    interface IObjParamsForCalc {
        gender: string,
        height: number,
        weight: number,
        age: number,
        activity: number
    }

    const objParamsForCalc: IObjParamsForCalc = {
        gender: localStorage.getItem("gender") || "female",
        height: 0,
        weight: 0,
        age: 0,
        activity: parseFloat(localStorage.getItem("activity") || "0") 
    }

    document.querySelector(`#${objParamsForCalc.gender}`)?.classList.add("calculating__choose-item_active");
    document.querySelector(`[data-coefficient="${objParamsForCalc.activity}"]`)?.classList.add("calculating__choose-item_active");

    gender?.addEventListener("click", (event) => {
        const target = (event.target as Element);

        if (target.id === "female") {
            objParamsForCalc.gender = "female";
            document.querySelector("#male")?.classList.remove("calculating__choose-item_active");
            target.classList.add("calculating__choose-item_active");
            сountingСalories(objParamsForCalc);
            localStorage.setItem("gender", "female");
        }
        if (target.id === "male") {
            objParamsForCalc.gender = "male";
            document.querySelector("#female")?.classList.remove("calculating__choose-item_active");
            target.classList.add("calculating__choose-item_active");
            сountingСalories(objParamsForCalc);
            localStorage.setItem("gender", "male");
        }
    });

    baseParams?.addEventListener("input", (event) => {
        const target = (event.target as HTMLInputElement);

        target.value = target.value.replace(/\D/g, "");
        if (target.id === "height") {
            objParamsForCalc.height = parseInt((event.target as HTMLInputElement).value);
        }
        if (target.id === "weight") {
            objParamsForCalc.weight = parseInt((event.target as HTMLInputElement).value);
        }
        if (target.id === "age") {
            objParamsForCalc.age = parseInt((event.target as HTMLInputElement).value);
        }
        сountingСalories(objParamsForCalc);
    });

    activity?.addEventListener("click", (event) => {
        if ((event.target as Element).closest(".calculating__choose_big")) {
            const value: string | null = (event.target as HTMLInputElement).getAttribute("data-coefficient");

            if (value) {
                activitys.forEach(item => item.classList.remove("calculating__choose-item_active"));
                (event.target as Element).classList.add("calculating__choose-item_active");
                objParamsForCalc.activity = parseFloat(value);
                сountingСalories(objParamsForCalc);
                localStorage.setItem("activity", value);
            }
        }
    });

    function сountingСalories({gender, height, weight, age, activity}: IObjParamsForCalc) {
        const resultBox: div = document.querySelector(".calculating__result span");
        let result: number = 0;

        if (gender && height && weight && age && activity) {
            if (gender === "male") {
                result = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity;
            }
            if (gender === "female") {
                result = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity;
            }

            if (resultBox) {
                resultBox.textContent = Math.round(result) + "";
            }
        } else {
            if (resultBox) {
                resultBox.textContent = "0";
            }
        }
    }
}