const PostRepository = require("../repositories/posts-repository")
const crypto = require("crypto")

const getDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return `${day}/${month}/${year} ${hour}:${minute}:${second}`;
};

class PostController {
  async All(req, res) {
    const repository = new PostRepository()  
    res.send({
        posts: await repository.findAll()
    })
  }

  async Create(req, res) {
    const repository = new PostRepository()  
    const {name,content,slug} = req.body
    res.send({
        posts: await repository.create({
          id: crypto.randomUUID(),
          name,content,slug,
          createdAt: getDate()
        })
    })
  }

  async FindBySlug(req, res) {
    const slug = req.params['slug']
    const repository = new PostRepository()  
    res.send(await repository.findBySlug(slug))
  }
}

module.exports = PostController