import React from 'react';

class PresentationForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            presenterName: '',
            presenterEmail:'',
            companyName:'',
            title:'',
            synopsis:'',
            conference: '',
            conferences: [],
        };
        this.handleChangeConference = this.handleChangeConference.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeSynopsis = this.handleChangeSynopsis.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeCompany = this.handleChangeCompany.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
    }


    async componentDidMount() {
        const url = 'http://localhost:8000/api/conferences/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({ conferences: data.conferences })
        }
    }


    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.presenter_name = data.presenterName;
        data.presenter_email = data.presenterEmail;
        data.company_name = data.companyName;
        delete data.conferences
        delete data.presenterName;
        delete data.presenterEmail;
        delete data.companyName;
        console.log(data);

        const presentationUrl = `http://localhost:8000/api/conferences/${data.conference}/presentations/`;
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(presentationUrl, fetchConfig);
        if (response.ok) {
            const newPresenters = await response.json();
            console.log(newPresenters);

            this.setState ({
            presenterName: '',
            presenterEmail:'',
            companyName:'',
            title:'',
            synopsis:'',
            conference: '',

            });
        }
    }

    handleChangeConference(event) {
        const value = event.target.value;
        this.setState({ conference:value });
    }

    handleChangeSynopsis(event) {
        const value = event.target.value;
        this.setState({synopsis:value })
    }

    handleChangeTitle(event) {
        const value = event.target.value;
        this.setState({ title:value })
    }

    handleChangeCompany(event) {
        const value = event.target.value;
        this.setState({companyName:value})
    }

    handleChangeEmail(event) {
        const value = event.target.value;
        this.setState({presenterEmail:value})
    }

    handleChangeName(event) {
        const value = event.target.value;
        this.setState({presenterName:value})
    }

    render() {
        return (
            <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new presentation</h1>
                <form onSubmit={this.handleSubmit}
                id="create-presentation-form">
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeName}
                    placeholder="Presenter name"
                    required type="text"
                    name="presenter_name" id="presenter_name"
                    value={this.state.presenterName}
                    className="form-control"/>
                    <label htmlFor="presenter_name">Presenter name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeEmail}
                    placeholder="Presenter email"
                    required type="email"
                    name="presenter_email" id="presenter_email"
                    value={this.state.presenterEmail}
                    className="form-control"/>
                    <label htmlFor="presenter_email">Presenter email</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeCompany}
                    placeholder="Company name"
                    type="text"
                    name="company_name" id="company_name"
                    value={this.state.companyName}
                    className="form-control"/>
                    <label htmlFor="company_name">Company name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={this.handleChangeTitle}
                    placeholder="Title"
                    required type="text"
                    name="title" id="title"
                    value={this.state.title}
                    className="form-control"/>
                    <label htmlFor="title">Title</label>
                </div>
                <div className="mb-3">
                    <label htmlFor="synopsis">Synopsis</label>
                    <textarea onChange={this.handleChangeSynopsis}
                    className="form-control" id="synopsis"
                    value={this.state.synopsis}
                    rows="3" name="synopsis" ></textarea>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleChangeConference}
                    required name="conference" id="conference" className="form-select">
                    <option value="">Choose a conference</option>
                    {this.state.conferences.map(conference => {
                        return (
                            <option key={conference.id} value={conference.id}>{conference.name}</option>
                        )
                    })}
                    </select>
                </div>
                <button className="btn btn-primary">Create</button>
                </form>
            </div>
            </div>
        </div>
        );
    }
};

export default PresentationForm
