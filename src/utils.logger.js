
// Logger configurator
export function logger(
  target,
  prefix = 'Default prefix: >',
  level = 'info',
  lineBreak = true,
  breakColor = '#fff'

) {

  const longBreakLine = '----------------------------------------------------------';
  const colorTemplate = 'background: #222; color: ';
  const infoColor = '#ffffff';
  const warnColor = '#ffff00';
  const errColor = '#ff0000';

  const infoLog = () => {
    console.log(`%c [ ${prefix} ]`, `${colorTemplate}${infoColor}`, target);
    if (lineBreak) console.log(`%c  ${longBreakLine} `, `color: ${breakColor}`);
  };

  const warnLog = () => {
    console.log(`%c [ ${prefix} ]`, `${colorTemplate}${warnColor}`, target);
    if (lineBreak) console.log(`%c  ${longBreakLine} `, `color: ${breakColor}`);
  };

  const errLog = () => {
    console.log(`%c [ ${prefix} ]`, `${colorTemplate}${errColor}`, target);
    if (lineBreak) console.log(`%c  ${longBreakLine} `, `color: ${breakColor}`);
  };

  switch (level) {
    case 'info': return infoLog();
    case 'warn': return warnLog();
    case 'err': return errLog();
    default: return infoLog();
  }

}
