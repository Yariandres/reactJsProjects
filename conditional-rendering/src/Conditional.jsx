import React from 'react'

// ID ESLSE STATEMENT

// ASS A FUNCTION COMPONENT
// export const List = ({ list }) => {
//   // if list is not there
//   if (!list) {
//     return null;
//   }

//   // if the array is empty
//   if (!list.length) {
//     return (<p>Sorry this list is empty</p>)
//   } else {
//     return(
//       <div>{list.map((item, index) => (
//           <div key={index}>{item.name}</div>
//         ))}
//       </div>
//     )
//   }
// }

// EXPORTING AS  CLASS COMPONENT [the react class is past a props component i.e this.props.list]
// Must have a render() method

// export class List extends React.Component {
//   render() {
//     // if list is not there
//     if (!this.props.list) {
//       return (<p>Sorry no products found</p>);
//     }

//     // if the array is empty
//     if (!this.props.list.length) {
//       return (<p>Sorry this list is empty</p>)
//     } else {
//       return(
//         <div>{this.props.list.map((item, index) => (
//             <div key={index}>{item.name}</div>
//           ))}
//         </div>
//       )
//     }
//   }
// }

// THE TERNRY OPORATOR 

// export const List = props => !props.list ? <p>Sorry no products found</p> : !props.list.length ? <p>Sorry the list is empty</p> : (
//   <>
//     {props.list.map((item, index) => (
//       <div key={index}>{item.name}</div>
//     ))}
//   </>
// )

// AS  CLASS COMPONENT
export class List extends React.Component {
  render() {
    return (
      !this.props.list ? <p>Sorry no products found</p> : !this.props.list.length ? <p>Sorry the list is empty</p> : (
        <>
          {this.props.list.map((item, index) => (
            <div key={index}>{item.name}</div>
          ))}
        </>
      )
    )
  }
}

// && LOGICAL OPORATOR
// export const LoadingIndicator = ({ isLoading }) => (
//   <>
//   {isLoading && <p>Loading...</p>}
//   <div>Here is my content</div>
//   </>
// )

export class LoadingIndicator extends React.Component {
  render () {
    return (
      <>
        {this.props.isLoading && <p>Loading...</p>}
        <div>Here is my content</div>
      </>
    )
  }
}