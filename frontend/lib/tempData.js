import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'temp')

export function getStaticData() {
  // Get file names under /posts
  console.log(postsDirectory)
  const fileNames = fs.readdirSync(postsDirectory)
  const staticData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    console.log({
      id, 
      ...matterResult.data
    })
    return {
      id,
      ...matterResult.data
    }
  })
  return staticData[0]
}