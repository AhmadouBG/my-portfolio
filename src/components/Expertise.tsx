import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../i18n/translations';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python", "Django", "FastAPI", "REST APIs", "JavaScript", "SQL", "PostgreSQL",
];

const labelsSecond = [
    "Scikit-learn", "PyTorch", "Tensorflow", "Pandas", "NumPy", "Ollama", "Qwen", "RAG", "BM25", "dbt", "MCP"
];

const labelsThird = [
    "Git", "GitHub", "GitHub Actions", "Docker", "CI/CD", "Linux",
];

function Expertise() {
    const { language } = useLanguage();
    const t = translations[language].expertise;

    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>{t.heading}</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>{t.card1.title}</h3>
                        <p>{t.card1.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">{t.card1.chipLabel}</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>{t.card2.title}</h3>
                        <p>{t.card2.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">{t.card2.chipLabel}</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>{t.card3.title}</h3>
                        <p>{t.card3.description}</p>
                        <div className="flex-chips">
                            <span className="chip-title">{t.card3.chipLabel}</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;