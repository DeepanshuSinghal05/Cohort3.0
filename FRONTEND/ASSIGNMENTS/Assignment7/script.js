const create_btn = document.querySelector("#create-task-btn");

const easyTaskContainer = document.querySelector(".easy-tasks");
const mediumTaskContainer = document.querySelector(".medium-tasks");
const hardTaskContainer = document.querySelector(".hard-tasks");

function createTask(title, description, category) {

    const taskCard = document.createElement("div");

    taskCard.classList.add("task-card");

    taskCard.dataset.category = category;

    taskCard.innerHTML = `
        <div class="task-top">
            <h3>${title}</h3>

            <span class="status pending">
                Pending
            </span>
        </div>

        <p>${description}</p>

        <div class="task-actions">
            <button class="edit-btn">
                Edit
            </button>

            <button class="delete-btn">
                Delete
            </button>
        </div>
    `;

    moveTask(taskCard, category);

    attachTaskEvents(taskCard);
}

function createTaskModal(
    isEdit = false,
    taskCard = null,
    title = "",
    description = "",
    category = "easy"
) {

    const popup = document.createElement("div");

    popup.classList.add("task-modal");

    popup.innerHTML = `
        <div class="task-form-container">

            <div class="task-form-header">
                <h2>
                    ${isEdit ? "Edit Task" : "Create New Task"}
                </h2>

                <button class="close-btn">
                    &times;
                </button>
            </div>

            <form class="task-form">

                <div class="input-group">
                    <label>Task Title</label>

                    <input
                        type="text"
                        id="task-title"
                        placeholder="Enter task title"
                        value="${title}"
                    >
                </div>

                <div class="input-group">
                    <label>Task Description</label>

                    <textarea
                        id="task-description"
                        placeholder="Enter task description"
                    >${description}</textarea>
                </div>

                <div class="input-group">
                    <label>Category</label>

                    <select id="task-category">

                        <option
                            value="easy"
                            ${category === "easy" ? "selected" : ""}
                        >
                            Easy
                        </option>

                        <option
                            value="medium"
                            ${category === "medium" ? "selected" : ""}
                        >
                            Medium
                        </option>

                        <option
                            value="hard"
                            ${category === "hard" ? "selected" : ""}
                        >
                            Hard
                        </option>

                    </select>
                </div>

                <div class="input-group">
                    <label>Status</label>

                    <input
                        type="text"
                        value="Pending"
                        readonly
                        class="status-input"
                    >
                </div>

                <button
                    type="submit"
                    class="add-task-btn"
                >
                    ${isEdit ? "Update Task" : "Create Task"}
                </button>

            </form>

        </div>
    `;

    document.body.appendChild(popup);

    handleModalEvents(
        popup,
        isEdit,
        taskCard
    );
}

function handleModalEvents(
    popup,
    isEdit = false,
    taskCard = null
) {

    const closeBtn =
        popup.querySelector(".close-btn");

    const form =
        popup.querySelector(".task-form");

    closeBtn.addEventListener("click", () => {
        popup.remove();
    });

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const title =
            popup.querySelector("#task-title")
                .value
                .trim();

        const description =
            popup.querySelector("#task-description")
                .value
                .trim();

        const category =
            popup.querySelector("#task-category")
                .value;

        if (!title || !description) {
            alert("Please fill all fields.");
            return;
        }

        if (isEdit) {

            const oldCategory =
                taskCard.dataset.category;

            taskCard.querySelector("h3")
                .textContent = title;

            taskCard.querySelector("p")
                .textContent = description;

            taskCard.dataset.category =
                category;

            if (oldCategory !== category) {

                moveTask(
                    taskCard,
                    category
                );

            }

        } else {

            createTask(
                title,
                description,
                category
            );

        }

        popup.remove();

    });

}

function attachTaskEvents(taskCard) {

    const editBtn =
        taskCard.querySelector(".edit-btn");

    const deleteBtn =
        taskCard.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => {
        editTask(taskCard);
    });

    deleteBtn.addEventListener("click", () => {
        deleteTask(taskCard);
    });

}

function deleteTask(taskCard) {

    const confirmation = confirm(
        "Are you sure you want to delete this task?"
    );

    if (confirmation) {
        taskCard.remove();
    }

}

function editTask(taskCard) {

    const title =
        taskCard.querySelector("h3")
            .textContent;

    const description =
        taskCard.querySelector("p")
            .textContent;

    const category =
        taskCard.dataset.category;

    createTaskModal(
        true,
        taskCard,
        title,
        description,
        category
    );

}

function moveTask(taskCard, category) {

    switch (category) {

        case "easy":
            easyTaskContainer.appendChild(taskCard);
            break;

        case "medium":
            mediumTaskContainer.appendChild(taskCard);
            break;

        case "hard":
            hardTaskContainer.appendChild(taskCard);
            break;

    }

}

create_btn.addEventListener("click", () => {
    createTaskModal();
});