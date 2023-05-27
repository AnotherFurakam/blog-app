import { MarkdownMetadata } from '@/interfaces/markdow.interfaces';
import matter from 'gray-matter'
import {readFileSync, readdirSync} from "fs";

/**
 * Esta función retorna la lista de todos los nombres de los archivos markdown encontrados en la carpeta de src/posts 
 * @returns string[]
 */
const getPostFiles = () => {
  const folder = "src/posts/"
  const files = readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith(".md"))

  return markdownPosts
}


/**
 * Esta función retorna la lista de los metadatos de cada post existente
 * @returns MarkdownMetadata[]
 */
const getAllPosts = () => {

  const markdownPosts = getPostFiles()

  //Gray-matter data from each file
  const posts: MarkdownMetadata[] = markdownPosts.map((filename) => {
    const fileContents = readFileSync(`src/posts/${filename}`, 'utf-8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: filename.replace(".md", ""),
      categories: matterResult.data.categories,
      poster: matterResult.data.poster
    }
  })

  return posts
}

const getPostsByQuantity = (quantity: number): MarkdownMetadata[] => {
  const posts = getAllPosts()
  return posts.slice(0,quantity)
}

const getPostBySlug = (slug: string) => {
  const folder = "src/posts/"
  const file = `${folder}${slug}.md`
  const content = readFileSync(file, "utf8")
  const matterResult = matter(content)
  return matterResult;
}


const postService = {
  getAllPosts,
  getPostBySlug,
  getPostsByQuantity
}

export default postService