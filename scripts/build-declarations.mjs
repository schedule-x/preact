import { execSync } from 'child_process'

function build() {
  try {
    execSync('vue-tsc --project tsconfig.build.json')
    const content = execSync('cat dist/types/index.d.ts').toString()
    const updatedContent = content.replace(/\.tsx/g, '.d.ts')
    execSync(`echo "${updatedContent}" > dist/types/index.d.ts`)
  } catch (e) {
    console.error(e)
  }
}

build()
