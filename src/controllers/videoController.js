export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating:5,
      comments:2,
      createdAt: "2 minutes ago",
      views:59,
      id:1,
    },
    {
      title: "Second video",
      rating:5,
      comments:2,
      createdAt: "2 minutes ago",
      views:59,
      id:1,
    },
    {
      title: "Third video Video",
      rating:5,
      comments:2,
      createdAt: "2 minutes ago",
      views:59,
      id:1,
    },
  ];
  return res.render("Home", {pageTitle: "Home", videos });
}
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  return res.send("Delete Video");
};




