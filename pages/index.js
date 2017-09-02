import stylesheet from '../sass/base.scss'

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    chao!
  </div>
)
