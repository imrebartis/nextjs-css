/** @type {import('next').NextConfig} */
import stylexPlugin from '@stylexjs/nextjs-plugin'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const nextConfig = {
  transpilePackages: ['@stylexjs/open-props']
}

export default stylexPlugin({
  rootDir: __dirname
})(nextConfig)
