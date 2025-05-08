export function removeEmptyFields<T extends object>(obj: T): Partial<T> {
  return Object.fromEntries(
    Object.entries(obj).filter(
      ([_, value]) =>
        value !== undefined &&
        value !== null &&
        !(typeof value === "string" && value.trim() === "") &&
        !(Array.isArray(value) && value.length === 0) &&
        !(
          typeof value === "object" &&
          !Array.isArray(value) &&
          Object.keys(value).length === 0
        )
    )
  ) as Partial<T>;
}
