import React from "react";
import { Link } from "react-router-dom";

class NewTask extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            description: "",
            priority: ""
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
    }

    stripHtmlEntities(str) {
        return String(str)
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();
        const url = "/api/v1/tasks/create";
        const { name, description, priority } = this.state;

        if (name.length == 0)
            return;

        const body = {
            name,
            description,
            priority
        };

        const token = document.querySelector('meta[name="csrf-token"]').content;
        fetch(url, {
            method: "POST",
            headers: {
                "X-CSRF-Token": token,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .then(response => this.props.history.push(`/task/${response.id}`))
            .catch(error => console.log(error.message));
    }

    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12 col-lg-6 offset-lg-3">
                        <h1 className="font-weight-normal mb-5">
                            Create a new task.
                        </h1>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="taskName">Task name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="taskName"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="taskDescription">Description</label>
                                <input
                                    type="text"
                                    name="description"
                                    id="taskDescription"
                                    className="form-control"
                                    required
                                    onChange={this.onChange}
                                />
                            </div>
                            <label htmlFor="priority">Priority</label>
                            <textarea
                                className="form-control"
                                id="taskPriority"
                                name="priority"
                                required
                                onChange={this.onChange}
                            />
                            <button type="submit" className="btn custom-button mt-3">
                                Create Task
                            </button>
                            <Link to="/tasks" className="btn btn-link mt-3">
                                Back to tasks
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default NewTask;