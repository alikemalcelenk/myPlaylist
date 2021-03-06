import styled from 'styled-components';
import { compose, color, size, space, flexbox, border, layout, typography } from 'styled-system';

const Text = styled.span(
    compose(color, size, space, flexbox, border, layout, typography)
);

export default Text;