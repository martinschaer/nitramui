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
const StyledTable = styled.table`
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
  margin: -1px;
  width: calc(100% + 2px);

  thead, tfoot {
    background-color: ${ds.colors.cardHeader};
  }

  th, td {
    border: 1px solid ${ds.colors.nestedBorder};
    padding: 0.5rem 1rem;
  }

  th {
    ${preHeadingStyles}
    text-align: left;
  }

  tr:nth-child(2n) {
    background-color: ${ds.colors.borderLight};
  }
`

// ---------------------------------------------------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------------------------------------------------
const Table = ({
  children
}) => {
  // -------------------------------------------------------------------------------------------------------------------
  // Render
  // -------------------------------------------------------------------------------------------------------------------
  return (
    <StyledTable>
      {children}
    </StyledTable>
  )
}

// ---------------------------------------------------------------------------------------------------------------------
// PropTypes, defaults & export
// ---------------------------------------------------------------------------------------------------------------------
Table.propTypes = {
  children: PropTypes.node
}
Table.defaultProps = {}

export default Table
