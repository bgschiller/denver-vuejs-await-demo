function sleep(ms) {
  return new Promise(res => setTimeout(res, ms));
}

let catIx = 0;
let catImgs = [
  "https://images.pexels.com/photos/20787/pexels-photo.jpg?cs=srgb&dl=animal-pet-cat-20787.jpg&fm=jpg",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&h=350",
  "https://static.boredpanda.com/blog/wp-content/uploads/2018/04/5acb63d83493f__700-png.jpg",
  { error: "No more cats for today" },
  "https://yt3.ggpht.com/b3hgmMgwScEcUB7rGxZl6m6ogxFLw5_GjKSVFdzVzd_Q8aAKkr35IkV7aIsCY8carzabsSlLmNbf3CFozMM=s900-mo-c-c0xffffffff-rj-k-no",
  { error: "network error" }
];
export function fetchCat() {
  return sleep(1500).then(() => {
    catIx = (catIx + 1) % catImgs.length;
    const cat = catImgs[catIx];
    if (cat.error) throw new Error(cat.error);
    return cat;
  });
}
