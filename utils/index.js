import { Text } from "@/components";

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

export function GetBadgeInvitation() {
  return (
    <div className="px-4 py-2 bg-green-400/20 text-green-400 rounded-md">
      <Text>Aktif</Text>
    </div>
  );
}

export function GetPackage(value = "bronze") {
  switch (value) {
    case "bronze":
      return (
        <div className="bg-slate-100 px-4 w-fit py-2 rounded-full">Bronze</div>
      );
  }
}
