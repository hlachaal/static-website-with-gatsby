const laptopIssues = [
  { _id: "275e0b32e82b3de97b80f35795de2f51", title: "Not charging" },
  { _id: "d65ceea071ad3dd7802b8a8dd0cabdbb", title: "Need new battery" },
  { _id: "f39b00a99b98d0039049bd53197a0b25", title: "Won't start up" },
  { _id: "7cae9910d749b6999964d7dde47f7e86", title: "Broken screen" },
  {
    _id: "0298f73e858c3d4944ac2aee136dcb90",
    title: "Broken keyboard / trackpad",
  },
  { _id: "413157e75b9a7b968727d3a1f4867506", title: "Other issue" },
]

export function getLaptopIssues() {
  return laptopIssues
}

export function getLaptopIssue(id) {
  return laptopIssues.find(m => m._id === id)
}
