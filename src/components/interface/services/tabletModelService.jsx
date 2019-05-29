const tabletModels = [
  { _id: "5d318d368f5773043fb45efc38e54dcc", title: "iPad Pro 12.9 (3rd Gen)" },
  { _id: "b11386711658778d89b9188109227674", title: "iPad Pro 12.9 (2nd Gen)" },
  { _id: "8d01fbae9da670f91eb3cf4537567f16", title: "iPad Pro 12.9 (1st Gen)" },
  { _id: "4fce14672e40049c78040f3e90c24a69", title: "iPad Pro 11" },
  { _id: "765075cceda3a0aca5b71818a317abce", title: "iPad Pro 10.5" },
  { _id: "f837a2ef3c1ac41e86049be9692f0d7e", title: "iPad Pro 9.7" },
  { _id: "31a8750e7d2ade379a1c09f981663b50", title: "iPad Air 3(2019)" },
  { _id: "18e05c0ee07228010d884f6863a014a5", title: "iPad Air 2" },
  { _id: "3ea179968665d79ef98584d6a5ae8bb5", title: "iPad Air" },
  { _id: "96f7c429ce726bb569e41b0dad83459c", title: "iPad mini 5" },
  { _id: "c26a9cd8315da2b2e3eaa819bf50cf61", title: "iPad mini 4" },
  { _id: "8121fbd84d1900701bb0778bce870168", title: "iPad mini 3" },
  { _id: "4ef38fc96d4e9b34ef165fbd2a487b78", title: "iPad mini 2" },
  { _id: "90e398f9b5e1b2dd7955440db63b38c5", title: "iPad mini" },
  { _id: "8a163543d6c523904b108aef48ad5342", title: "iPad 6 (2018)" },
  { _id: "d80acba1903f2f51f3905b48324adfc2", title: "iPad 5 (2017)" },
  { _id: "ecf169bc27e010488d046ab81a85284a", title: "iPad 4" },
  { _id: "eba02042683a15832e369bf7a666ff16", title: "iPad 3" },
  { _id: "58011ece50c2b3b106dfa03f44a591d3", title: "iPad 2" },
  { _id: "e8f431c11e16af173221e4c523e1d4a3", title: "Microsoft Surface Book" },
  { _id: "5d98ca3e8cb6262b5484f1222ad381bd", title: "Microsoft Surface Pro 6" },
  { _id: "5f4e045406aa86443a634520d4bbf6be", title: "Microsoft Surface Pro 5" },
  { _id: "eb0271945f20ca50737859587e2ec496", title: "Microsoft Surface Pro 4" },
  { _id: "6e9eeaea2456f1fc1f8f4e8811b3d586", title: "Microsoft Surface Pro 3" },
  { _id: "f7e097b1df1daa729e4377c7ce2125ad", title: "Microsoft Surface 3" },
]

export function getTabletModels() {
  return tabletModels
}

export function getTabletModel(id) {
  return tabletModels.find(m => m._id === id)
}
