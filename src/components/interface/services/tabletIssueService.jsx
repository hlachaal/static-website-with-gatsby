const tabletIssues = [
  { _id: "b8039ab0dd55ef1236f404227638faad", title: "Not taking charge" },
  { _id: "ec8f1c987322ed4d782a3453d40990ed", title: "Need new battery" },
  { _id: "c375f942d66a99bc5df81529ef6dddad", title: "Broken screen" },
  {
    _id: "323a9c12ddf9b4ec8485686dbd423a60",
    title: "Broken camera / lens",
  },
  {
    _id: "bfd3703c9fa4c8b1526de1f943574e3a",
    title: "Broken speaker / mic",
  },
  { _id: "6752f84164e8920ce299b982b8099ba7", title: "Other issue" },
]

export function getTabletIssues() {
  return tabletIssues
}

export function getTabletIssue(id) {
  return tabletIssues.find(m => m._id === id)
}
