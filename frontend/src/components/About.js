export default function About() {
    const developers = [
        {
            firstName: "Magret",
            lastName: "Adekunle",
            bio: "Magret is a senior at UT Austin majoring in Math and African & American Diaspora Studies. She is pursuing a Master's in Artificial intelligence (AI) at UT after her graduation.",
            role: "Group Leader: FullStack Development with Flask, Python, Bootstrap, & etc.",
            img: "https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp",
            commits: 33,
            issues: 18,
            unitTests: 0,
            gitlabProfile: 'https://gitlab.com/magretadekunle'
        },
        {
            firstName: "George",
            lastName: "Mathew",
            bio: "George is a senior at UT Austin studying Biomedical Engineering and pursuing a Master's in Data Science after his graduation.",
            role: "Backend Development with Flask and Python.",
            img: "https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp",
            commits: 20,
            issues: 0,
            unitTests: 6,
            gitlabProfile: 'https://gitlab.com/georgegmathew12'
        },
        {
            firstName: "Holly",
            lastName: "Luebsen",
            bio: "Holly is a junior at UT Austin studying Mathematics and pursuing certificates in German, Elements of Computing and Science Communication.",
            role: "Backend Development",
            img: "https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp",
            commits: 24,
            issues: 0,
            unitTests: 0,
            gitlabProfile: 'https://gitlab.com/hollyrl108'
        },
        {
            firstName: "Ryan",
            lastName: "Mullowney",
            bio: "Ryan is a software developer for UT's fundraising department, and enrolls in CS courses to broaden his skillset and fill in gaps in knowledge. He has a Bachelor's in History & Philosophy.",
            role: "Front-End Development with HTML, Bootstrap, and React",
            img: "https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp",
            commits: 30,
            issues: 11,
            unitTests: 0,
            gitlabProfile: 'https://gitlab.com/rwmullowney'
        },
        {
            firstName: "Jack",
            lastName: "Yeung",
            bio: "Jack is a senior at UT Austin studying Biomedical Engineering pursuing the Elements of Computing Certificate.",
            role: "Backend Development",
            img: "https://mdbcdn.b-cdn.net/img/new/standard/city/046.webp",
            commits: 11,
            issues: 0,
            unitTests: 3,
            gitlabProfile: 'https://gitlab.com/jackyeung1'
        },
    ]

    const developersMap = developers.map((developer) => {
        return (
            <>
                <div className="col" style= {{ margintop: .5+'rem', marginBottom: .5+'rem', marginLeft: 'auto', marginRight: 'auto'}} >
                    <div className="card h-100">
                        <img src={developer.img} className="card-img-top"
                            alt={`${developer.firstName} ${developer.lastName}`} />
                        <div className="card-body">
                            <h4 className="card-title">{developer.firstName} {developer.lastName}</h4>
                            <p className="card-text"><b>Biogrpahy:</b> {developer.bio}</p>
                            <p className="card-text"><b>Main role: </b> {developer.role} </p>
                            <p className="card-text"><b>Commits by {developer.firstName}: </b>{developer.commits}</p>
                            <p className="card-text"><b>Issues Created: </b>{developer.issues}</p>
                            <p className="card-text"><b>Unit Tests: </b>{developer.unitTests}</p>
                            <a href={developer.gitlabProfile} target="_blank" rel="noopener noreferrer" className="btn btn-primary">{developer.firstName}'s Profile</a>
                        </div>
                    </div>
                </div>
            </>
        )
    })


    return (
        <div className="row">
            <h1 style={{ textAlign: "center"}}>About Page</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-lg-3 mb-5">
                {developersMap}
            </div>

            <section>
                <div class="card text-center" style= {{width: 70+'%', marginBottom: 3+'rem', marginLeft: 'auto', marginRight: 'auto'}}>
                    <div class="card-header display-6"> <b>GitLab Stats</b> </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <b>Total Commits: </b></li>
                        <li class="list-group-item"> <b>Total Issues: </b></li>
                        <li class="list-group-item"> <b>Total Unit Tests: </b></li>
                        <li class="list-group-item"> <b>Postman API Collection: </b><a href="https://music-recommendation.postman.co/workspace/Team-Workspace~17d1e66a-099f-4ea0-833c-8973e17965de/collection/33692671-6403f3c6-d92b-49af-b5e0-21fc9aa5292a?tab=variables"> Postman </a> </li>
                        <li class="list-group-item"> <b>GitLab Issues Tracker: </b><a href="https://gitlab.com/magretadekunle/cs331e-idb/-/issues"> Issues </a> </li>
                        <li class="list-group-item"> <b>GitLab Repository: </b><a href="https://gitlab.com/magretadekunle/cs331e-idb"> Repository </a> </li>
                        <li class="list-group-item"> <b>GitLab Wiki: </b><a href="https://gitlab.com/magretadekunle/cs331e-idb/-/wikis/home"> ReaWikict</a> </li>
                        <li class="list-group-item"> <b>Presentation Slides: </b><a href="https://gitlab.com/magretadekunle/cs331e-idb/-/issues"> Slides </a> </li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="card text-center" style= {{width: 70+'%', marginBottom: 3+'rem', marginLeft: 'auto', marginRight: 'auto'}}>
                    <div class="card-header display-6"> <b>Data</b> </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <b>Spotify Web API: </b> <a href="https://developer.spotify.com/documentation/web-api/"> Spotify API </a> </li>
                        <li class="list-group-item"> <b>Library to access Spotify API: </b><a href="https://spotipy.readthedocs.io/en/2.22.1/"> Spotipy </a> </li>
                        <li class="list-group-item"> <b>Published Postman Collection: </b> <a href=""> Postman Collection </a> </li>
                        <li class="list-group-item"> <b>Description Of How Each Was Scraped: </b></li>
                    </ul>
                </div>
            </section>

            <section>
                <div class="card text-center" style= {{width: 70+'%', marginBottom: 3+'rem', marginLeft: 'auto', marginRight: 'auto'}}>
                    <div class="card-header display-6"> <b>Tools Used</b> </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"> <b>Team Communication:</b> <a href="https://www.discord.com"> Discord </a> </li>
                        <li class="list-group-item"> <b>Website Hosting: </b> <a href="https://cloud.google.com/"> Google Cloud Platform </a> </li>
                        <li class="list-group-item"> <b>Git Repository Hosting: </b><a href="https://about.gitlab.com/"> GitLab </a> </li>
                        <li class="list-group-item"> <b>Framework for Backend: </b><a href="https://flask.palletsprojects.com/en/2.1.x/"> Flask </a> </li>
                        <li class="list-group-item"> <b>Main Frontend Formatting: </b><a href=""> React</a> </li>
                        <li class="list-group-item"> <b>Secondary Frontend Formatting: </b><a href="https://getbootstrap.com/"> Bootstrap </a> </li>
                        <li class="list-group-item"> <b>Database: </b><a href="https://www.postgresql.org/docs/current/app-psql.html"> PostgreSQL </a> </li>
                        <li class="list-group-item"> <b>Website Hosting: </b><a href="https://cloud.google.com/"> Google Cloud Platform </a> </li>
                        <li class="list-group-item"> <b>Git Repository Hosting: </b><a href="https://about.gitlab.com/">GitLab </a> </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}