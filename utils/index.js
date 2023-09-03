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

export function GetPackage(value = "bronze") {
  switch (value) {
    case "bronze":
      return (
        <div className="bg-slate-100 px-4 w-fit py-2 rounded-full">Bronze</div>
      );
  }
}

export function formatDate(props) {
  const inputDate = new Date(props);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("id-ID", options);
  return formatter.format(inputDate);
}

export function dateNow() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}
