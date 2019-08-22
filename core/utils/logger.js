import debug from 'debug'

const log = debug('app')
debug.enable('union*,app*,store*,module*,utility*')

export default log
