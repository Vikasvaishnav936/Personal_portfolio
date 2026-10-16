import './SkillCard.css';

function SkillCard(props){
    return (
         <div className="skill-card" data-aos="zoom-in">

            <div className="icon">
                {props.icon}
            </div>

            <h3>{props.title}</h3>

            <p>{props.description}</p>

            <div className="tags">

                {props.tags.map((tag,index)=>(
                     <span className="tag" key={index}>
                                {tag}
                                </span>
                ))}

            </div>

        </div>
    )
}

export default SkillCard;