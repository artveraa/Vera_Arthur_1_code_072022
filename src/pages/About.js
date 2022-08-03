import Collapse from "../components/Collapse";
import HomeBanner from "../components/HomeBanner";
import background from '../images/about-bg.jpg'
import '../styles/About.scss';

function About(props) {
  return (
    <div className='About-content'>
      <HomeBanner background={background} title=''/>
        <div className="Collapses">
            <Collapse header='Fiabilité'
                      body={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'}/>
            <Collapse header='Respect'
                      body={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'}/>
            <Collapse header='Service'
                      body={'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'}/>
            <Collapse header='Responsabilté'
                      body={`La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.`}/>
        </div>
    </div>
  );
}

export default About;