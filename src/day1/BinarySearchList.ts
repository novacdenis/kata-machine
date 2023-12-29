export default function bs_list(haystack: number[], needle: number): boolean {
    let lo = 0;
    let hi = haystack.length - 1;

    while (lo <= hi) {
        const m = Math.floor(lo + (hi - lo) / 2);
        const v = haystack[m];

        if (v === needle) return true;

        if (v < needle) lo = m + 1;
        else hi = m - 1;
    }

    return false;
}
