import "./addEmployees.scss";

export default function AddEmployees() {
    return (
        <div className="app-add-form">
            <h3>Додайте нового працівника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Як його звати?" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="З/П в $?" />

                <button type="submit"
                        className="btn btn-outline-light">Додати</button>
            </form>
        </div>
    );
}