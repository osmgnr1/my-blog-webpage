import express from "express";
import bodyParser from "body-parser";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(import.meta.dirname);
let posts = [
  {
    id: 3,
    title: "Neque porro quisquam est qui dolorem ipsum",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non felis ut dui semper dignissim at vel metus. Curabitur luctus consectetur consectetur. Vivamus ac ex rutrum, rutrum metus nec, suscipit nulla. Mauris consectetur sem eu vulputate pretium. Morbi efficitur dictum mollis. Nullam feugiat sapien at felis dapibus tristique. Fusce mollis magna quis nulla mattis lobortis. Nullam volutpat, orci vel viverra facilisis, dolor neque ornare est, nec pulvinar leo nibh eget libero. Integer vestibulum lectus sed egestas sagittis. Nulla id massa facilisis nisi interdum aliquet. Donec vitae purus nec turpis rutrum dapibus. Cras ornare neque in leo porta pretium. Sed posuere porttitor lorem, quis pharetra nulla. In blandit, orci a vestibulum interdum, nisl enim elementum mi, vel ultrices magna lectus nec quam. Sed vitae pulvinar arcu.",
    author: "Ömer Güner",
    date: "2025–05–04 05:24:07",
  },

  {
    id: 2,
    title: "Vivamus malesuada mi vel fringilla tristique",
    body: "Nunc vitae felis rutrum, placerat dolor vel, tempus odio. Etiam egestas ligula id purus sodales, nec viverra odio vehicula. Vivamus tincidunt risus vel placerat vulputate. Duis venenatis nulla vitae neque hendrerit rutrum. Quisque arcu velit, mollis sit amet nulla nec, tempus laoreet ex. Ut iaculis suscipit erat a rhoncus. Nulla facilisi. Praesent iaculis fermentum interdum. Integer nec magna metus. Etiam aliquet faucibus quam, id consectetur ex rhoncus in. Sed commodo eros vehicula lorem condimentum elementum. Aliquam bibendum molestie mauris sed eleifend. Pellentesque at sem ut nunc maximus consequat. Integer bibendum mi consequat arcu pellentesque congue. Morbi nibh arcu, sodales sed lacinia a, sollicitudin et diam. Aliquam congue finibus maximus. Proin at consectetur diam. Mauris et auctor nisl, quis semper massa. Sed varius velit in urna venenatis, ut tempor ligula mollis. Fusce id tincidunt diam, eu pellentesque lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut sed tincidunt arcu. Suspendisse id ex id ante consectetur facilisis vitae at tellus.",
    author: "Arişka Güner",
    date: "2025–04–01 10:24:07",
  },
  {
    id: 1,
    title: "Where does it come from?",
    body:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, , comes from a line in section 1.10.32 The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham. " +
      "Fusce ut rhoncus dui, ac accumsan lacus. Ut ac ultrices ante. Fusce accumsan faucibus risus sit amet pulvinar. Integer non magna feugiat velit mollis pulvinar nec eu dui. Sed non risus dignissim, cursus erat ac, pretium ligula. Phasellus at porta metus. Sed non congue ipsum. Curabitur pretium eget lacus ut posuere. Maecenas rutrum sapien sit amet metus varius, at tincidunt libero consectetur. Donec sit amet pellentesque neque, et rutrum erat. Donec ut dictum lorem. Aliquam sagittis feugiat velit sed pellentesque. Ut ac dui ex. " +
      "Fusce ut rhoncus dui, ac accumsan lacus. Ut ac ultrices ante. Fusce accumsan faucibus risus sit amet pulvinar. Integer non magna feugiat velit mollis pulvinar nec eu dui. Sed non risus dignissim, cursus erat ac, pretium ligula. Phasellus at porta metus. Sed non congue ipsum. Curabitur pretium eget lacus ut posuere. Maecenas rutrum sapien sit amet metus varius, at tincidunt libero consectetur. Donec sit amet pellentesque neque, et rutrum erat. Donec ut dictum lorem. Aliquam sagittis feugiat velit sed pellentesque. Ut ac dui ex. " +
      "Fusce ut rhoncus dui, ac accumsan lacus. Ut ac ultrices ante. Fusce accumsan faucibus risus sit amet pulvinar. Integer non magna feugiat velit mollis pulvinar nec eu dui. Sed non risus dignissim, cursus erat ac, pretium ligula. Phasellus at porta metus. Sed non congue ipsum. Curabitur pretium eget lacus ut posuere. Maecenas rutrum sapien sit amet metus varius, at tincidunt libero consectetur. Donec sit amet pellentesque neque, et rutrum erat. Donec ut dictum lorem. Aliquam sagittis feugiat velit sed pellentesque. Ut ac dui ex." +
      "Fusce ut rhoncus dui, ac accumsan lacus. Ut ac ultrices ante. Fusce accumsan faucibus risus sit amet pulvinar. Integer non magna feugiat velit mollis pulvinar nec eu dui. Sed non risus dignissim, cursus erat ac, pretium ligula. Phasellus at porta metus. Sed non congue ipsum. Curabitur pretium eget lacus ut posuere. Maecenas rutrum sapien sit amet metus varius, at tincidunt libero consectetur. Donec sit amet pellentesque neque, et rutrum erat. Donec ut dictum lorem. Aliquam sagittis feugiat velit sed pellentesque. Ut ac dui ex.",
    author: "Osman Güner",
    date: "2025–01–04 14:30:07",
  },
];

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  res.render("index.ejs", { posts: posts });
});

app.get("/post/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.filter((el) => el.id === id);

  res.render("post.ejs", { post: post[0] });
});

const currentdate = function () {
  let date_time = new Date();

  // get current date
  // adjust 0 before single digit date
  let date = ("0" + date_time.getDate()).slice(-2);

  // get current month
  let month = ("0" + (date_time.getMonth() + 1)).slice(-2);

  // get current year
  let year = date_time.getFullYear();

  // get current hours
  let hours = date_time.getHours();

  // get current minutes
  let minutes = date_time.getMinutes();

  // get current seconds
  let seconds = date_time.getSeconds();

  const currentdate =
    year +
    "-" +
    month +
    "-" +
    date +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds;
  // prints date & time in YYYY-MM-DD HH:MM:SS format
  //   console.log(currentdate);

  return currentdate;
};

app.post("/submit-post", (req, res) => {
  const id = posts.length + 1;
  const title = req.body.title;
  const body = req.body.script;
  const author = "Osman Güner";
  const date = currentdate();

  const post = {
    id: id,
    title: title,
    body: body,
    date: date,
    author: author,
  };

  posts.push(post);

  res.redirect("/");
});

app.get("/post/edit/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.filter((el) => el.id === id);

  res.render("edit-post.ejs", { post: post[0] });
});

app.post("/update-post", (req, res) => {
  const id = parseInt(req.body.id);
  const post = posts.filter((el) => el.id === id)[0];
  const updatedPost = post;
  const title = req.body.title;
  const body = req.body.script;
  const update_date = currentdate();

  updatedPost.updateDate = update_date;
  updatedPost.title = title;
  updatedPost.body = body;

  console.log(updatedPost);

  posts = posts.filter((el) => el.id !== id);
  posts.push(updatedPost);

  res.redirect("/");
});

app.get("/post/delete/:id", (req, res) => {
  const id = parseInt(req.params.id);
  posts = posts.filter((el) => el.id !== id);

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});
