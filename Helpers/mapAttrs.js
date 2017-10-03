export default function mapAttrs(attrs, acc = "") {
  const length = attrs.length;
  const atributes = attrs.shift();
  return length === 0
    ? `${acc};`
    : mapAttrs(
        attrs,
        `${acc} data-${atributes[0]}=${JSON.stringify(atributes[1])}`
      );
}
