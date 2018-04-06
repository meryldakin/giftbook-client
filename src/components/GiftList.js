import React from 'react'
import { connect } from "react-redux"
import GiftShow from "./GiftShow"


class GiftList extends React.Component {

  filterText = (giftArray) => {
    console.log(giftArray)
    let filterObject = this.props.filterSelector
    return  giftArray.filter(gift => {
      if (gift[filterObject["selector"]]){
        return gift[filterObject["selector"]]
              .toLowerCase()
              .includes(filterObject["text"].toLowerCase())
      }
    })

  }

  render(){
    // filtering
    let allGifts = this.props.gifts
    let filterObject = this.props.filterSelector
    if ( filterObject.text  ){
      switch (filterObject.selector) {
        case "description":
          allGifts = this.filterText(allGifts);
          break;
        default:
          return allGifts
      }
    }
    // sorting
    let sortableGifts = []
    let emptyGifts = []
    allGifts.forEach(gift => {
      if (gift[this.props.sortBySelector]){
        sortableGifts.push(gift)
      } else {
        emptyGifts.push(gift)
      }
    })

    let sortedGifts = []
    if (this.props.sortBySelector === "occasion"){
      sortedGifts = sortableGifts.sort( (a, b) => {
          return b[this.props.sortBySelector]["name"] < a[this.props.sortBySelector]["name"]
        })
    } else if (this.props.sortBySelector === "year"){
      sortedGifts = sortableGifts.sort( (a, b) => {
          return a[this.props.sortBySelector] < b[this.props.sortBySelector]
        })
    } else {
      sortedGifts = sortableGifts.sort( (a, b) => {
          return b[this.props.sortBySelector] < a[this.props.sortBySelector]
        })
    }

    sortedGifts.push(...emptyGifts)
    console.log(sortedGifts)
    return(
      <React.Fragment>
        {sortedGifts.map( gift => <GiftShow key={gift.id} gift={gift}/>)}
      </React.Fragment>
    )
  }

}


export default GiftList
