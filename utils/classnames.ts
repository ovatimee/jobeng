type ClassValue = string | { [k: string]: boolean } | undefined | null;

export function classnames(...args: ClassValue[]) {
  const classes = [] as string[];
  for (const arg of args) {
    if (!arg) continue;

    const argType = typeof arg;
    if (argType === "string" || argType === "number") {
      classes.push(arg as string);
    } else if (Array.isArray(arg) && arg.length) {
      const inner = classnames(...arg);
      if (inner) {
        classes.push(inner);
      }
    } else if (argType === "object") {
      for (const [key, value] of Object.entries(arg)) {
        if (value) {
          classes.push(key);
        }
      }
    }
  }
  return classes.join(" ");
}
