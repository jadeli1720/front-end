import React from 'react';
// import { Header, Table } from 'semantic-ui-react';
import styled from 'styled-components';

import MyBigCalendar from './BigCalander';

const CalenderContainer = styled.div`
    /* border: 1px solid pink; */
    border-radius:5px;
    color: white;
    margin: 30px auto;
    padding: 0px 10px;
    /* width: 460px; */
`;

const Title = styled.h1`
    color: #edebe3;
    font-family: 'Bitter', serif;
    font-size: 24px;
    margin: 20px 0;
    text-align: center;
`;

// const MonthHeader = styled.div`
//     display:flex;
//     justify-content: center;

//     p {
//       font-size: 18px;
//       margin: 20px 0;
//     }
// `;

const SleepHistory = () => {

  return (
    <div>
      <Title>Sleep History</Title>
      {/* Example 1 */}
      <CalenderContainer>
      <MyBigCalendar/>
      {/* Example 2 */}
        {/* <Table celled >
          <Table.Header>
            <Table.Row textAlign='center'>
            <Table.HeaderCell colSpan='7' >August 2019</Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell >S</Table.HeaderCell>
              <Table.HeaderCell >M</Table.HeaderCell>
              <Table.HeaderCell>T</Table.HeaderCell>
              <Table.HeaderCell>W</Table.HeaderCell>
              <Table.HeaderCell>T</Table.HeaderCell>
              <Table.HeaderCell>F</Table.HeaderCell>
              <Table.HeaderCell>S</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body className="body">
            <Table.Row textAlign='center'>
              <Table.Cell disabled >28</Table.Cell>
              <Table.Cell disabled>29</Table.Cell>
              <Table.Cell disabled>30</Table.Cell>
              <Table.Cell disabled>31</Table.Cell>
              <Table.Cell ><div className="selected">1</div></Table.Cell>
              <Table.Cell>2</Table.Cell>
              <Table.Cell>3</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>4</Table.Cell>
              <Table.Cell>5</Table.Cell>
              <Table.Cell>6</Table.Cell>
              <Table.Cell>7</Table.Cell>
              <Table.Cell>8</Table.Cell>
              <Table.Cell>9</Table.Cell>
              <Table.Cell>10</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>11</Table.Cell>
              <Table.Cell>12</Table.Cell>
              <Table.Cell>13</Table.Cell>
              <Table.Cell>14</Table.Cell>
              <Table.Cell>15</Table.Cell>
              <Table.Cell>16</Table.Cell>
              <Table.Cell>17</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>18</Table.Cell>
              <Table.Cell>19</Table.Cell>
              <Table.Cell>20</Table.Cell>
              <Table.Cell>21</Table.Cell>
              <Table.Cell>22</Table.Cell>
              <Table.Cell>23</Table.Cell>
              <Table.Cell>24</Table.Cell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.Cell>25</Table.Cell>
              <Table.Cell>26</Table.Cell>
              <Table.Cell>27</Table.Cell>
              <Table.Cell>28</Table.Cell>
              <Table.Cell>29</Table.Cell>
              <Table.Cell>30</Table.Cell>
              <Table.Cell>31</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table> */}
      </CalenderContainer>

    </div>
  )
}

export default SleepHistory;