// joining class tailwind
export function cn(...cns) {
  return cns.join(" ");
}

// Variant builder
export function variant(base, variants) {
  return function builder(variantValues) {
    const variantEntries = Object.entries(variantValues);
    let variantClasses = [];
    variantEntries.forEach(([name, value]) => {
      variantClasses.push(variants[name][value]);
    });
    // console.log(...variantClasses, base)
    return cn(base, ...variantClasses);
  };
}
