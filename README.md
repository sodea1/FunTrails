# FunTrails

Are you ready for your next outdoor adventure? FunTrails has you covered. [FunTrails](https://fun-trails.herokuapp.com/) is a clone of AllTrails, a website that curates parks, trails, and more to help you explore the outdoors. It brings together an online community of hikers, runners, bird watchers, and general outdoor enthusiasts to share their adventures. FunTrails allows users to search for various parks and/or trails, view related information (including location, trail path tracings, trail conditions, etc.), and create, edit, or delete personal reviews. 

## Languages & Technologies Used
  * React/Redux
  * Ruby on Rails
  * PostgreSQL
  * AWS S3
  * JavaScript
  * HTML5/SCSS
  * Google Maps API

## Functionality & MVP's
  * Splash Page / User Authentication: Users can sign up, login and logout.
  * Trail Page - READ: View specific trails, trail information, map location and path, associated reviews and other related trails.
  * Reviews - CRUD: Create and edit reviews via multi-step modal form. Read others reviews and delete your own.
  * Parks - READ: View park information, total reviews of trails within that park, and associated trails. 
  * Search: Find trails and parks easily via searchbar in splash and trail/park pages. Filter results by "trails", "parks", or "all" tabs.

### Splash Page
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/40174573/173404436-1876e1a9-2164-4dfc-b3b6-268e9038cb70.gif)
```jsx
<div className={this.state.hidden === true ? "hidden search-dropdown-container" : "search-dropdown-container"}>
   <div className="spacer"></div>
   <div className="inner-dropdown-container">
       <div className="search-tabs">
           <button className="tab-underline" onMouseDown={this.changeFilter} aria-selected>All</button>
           <button onMouseDown={this.changeFilter}>Trails</button>
           <button onMouseDown={this.changeFilter}>Parks</button>
       </div>

       <div className="search-items-list">
           {this.sortObjects(Object.values(searchHash[this.state.filterBy])).map((entity, idx) => {
               if (entity.name.toLowerCase().startsWith(this.state.search.toLowerCase())) {
                   liveItemsList.push(entity.name);

                   return (
                       <button onMouseDown={(e) => this.handleRedirect(e, entity)}  className="search-item" key={idx}>
                           <div className="loc-icon-div">
                               {(typeof entity.parkName === "undefined") ? 
                                   <BsTree className="park-icon" height="40px" width="40px" /> : 
                                   <img className="loc-icon" src={window.green_loc} width="16px" height="22px" /> };
                           </div>
                           <div className="search-details">
                               <h1>{(entity.name) ? entity.name : entity.name }</h1>
                               <span>{entity.state + ", " + entity.country}</span>
                           </div>
                       </button>
                   )
               } 
           })}

           {(liveItemsList.length === 0) ? 
               <div className="no-results">
                   <p>No Results</p>
                   <p>We couldn't find anything matching "{this.state.search}"</p>
               </div>
               :
               <div></div>
           }
       </div>
   </div>
</div>
```

### Reviews CRUD
![reviews](https://user-images.githubusercontent.com/40174573/173405520-3902e991-b569-4080-8911-87b7d6a44b9c.gif)

```jsx 
sortReviews(reviews) {
    if (reviews.length < 2) {
        return reviews;
    }

    const pivot = reviews[0];
    let left = [];
    let right = [];

    for (let i = 1; i < reviews.length; i++) {
        let nextReview = reviews[i];
        if (this.numCompare(nextReview.date_hiked, pivot.date_hiked) === -1) {
            right.push(nextReview);
        } else {
            left.push(nextReview);
        }
    }

    return this.sortReviews(left).concat([pivot]).concat(this.sortReviews(right));
}
```
