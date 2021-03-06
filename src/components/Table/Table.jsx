import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// ---------------------------------------------------------------------------------------------------------------------
// Local imports
// ---------------------------------------------------------------------------------------------------------------------
import ds from '../common/designSystem'
import {
  preHeadingStyles
} from '../common/typography'

// ---------------------------------------------------------------------------------------------------------------------
// Styled Components
// ---------------------------------------------------------------------------------------------------------------------
const StyledTableContainer = styled.div`
  overflow-x: auto;
`

const StyledTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  width: max-content;
  min-width: 100%;
  table-layout: ${props => props.layout};

  thead, tfoot {
    background-color: ${ds.colors.tableStripe};
    color: ${ds.colors.fg};
  }

  th, td {
    border: 1px solid ${ds.colors.border};
    padding: 0.5em;
    word-wrap: break-word;
    min-width: 4em;
    max-width: 20em;
  }

  th {
    ${preHeadingStyles}
    text-align: left;
  }

  tr:nth-child(2n) {
    background-color: ${ds.colors.tableStripe};
  }

  ${props => props.hoverable === true && `tbody tr:hover {
    background-color: ${ds.colors.tableHoverBg(props)};
    color: ${ds.colors.tableHoverFg(props)}
  }`}
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Table = ({
  hoverable,
  layout,
  children
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledTableContainer>
      <StyledTable hoverable={hoverable}>
        {children}
      </StyledTable>
    </StyledTableContainer>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Table.propTypes = {
  children: PropTypes.node,
  layout: PropTypes.oneOf(['fixed', 'auto']),
  hoverable: PropTypes.bool
}
Table.defaultProps = {
  layout: 'auto'
}

export default Table
