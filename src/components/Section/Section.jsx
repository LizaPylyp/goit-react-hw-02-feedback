import PropTypes from 'prop-types';
import { Title } from './Sections.styled';

function Section ({ title, children }) {
    return (
        <section>
            <Title>{title}</Title>
            {children}
        </section>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}


export { Section };