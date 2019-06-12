exports.index = function(req, res) {
  res.json({
    questions: [
      { title: "what is the gravity constant g", slug: "a" },
      { title: "what is the planacks constant", slug: "ab" },
      { title: "what is c is ensteins equation", slug: "abc" }
    ]
  });
};
