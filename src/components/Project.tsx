import mock01 from '../assets/images/mock01.jpg';
import mock02 from '../assets/images/mock02.jpg';
import mock03 from '../assets/images/mock03.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://gitfront.io/r/Bamba07/RSXYY31hGsZp/receipt-tracker/" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://gitfront.io/r/Bamba07/RSXYY31hGsZp/receipt-tracker/" target="_blank" rel="noreferrer"><h2>Receipt Tracker</h2></a>
                    <p>An AI-powered expense tracking and receipt management application that extracts structured data from receipt photos and PDFs using a locally-run, fine-tuned vision-language model.</p>
                </div>
                <div className="project">
                    <a href="#" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="#" target="_blank" rel="noreferrer"><h2>Data Pipeline for Renewable Energy</h2></a>
                    <p>End-to-end data pipeline that ingests weather & air-quality data, transforms it with dbt, orchestrates with Apache Airflow, and surfaces KPIs for renewable-energy grid planning in Senegal / West Africa via Power BI.</p>
                </div>
                <div className="project">
                    <a href="https://gitfront.io/r/Bamba07/ZKYSqhzxc36u/graph-paper-ai/" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://gitfront.io/r/Bamba07/ZKYSqhzxc36u/graph-paper-ai/" target="_blank" rel="noreferrer"><h2>Graph Paper AI</h2></a>
                    <p>Graph Paper AI is a state-of-the-art Vectorless RAG (Retrieval-Augmented Generation) application designed specifically for analyzing complex scientific publications, technical manuals, and data-dense PDFs.</p>
                </div>


            </div>
        </div>
    );
}

export default Project;