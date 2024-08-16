/**
 * The available spacing.
 *
 * Here's the rough guideline.  Customize this for you usage.  It's ok to put exceptions
 * within the components themselves if they are truly exceptions.
 *
 * 0 = none    - nothing. only here to bust out of a zero-based array.
 * 1 = tiny    - elementmediums contextually close to each other
 * 2 = smaller - for groups of closely related items or perhaps borders
 * 3 = small   - ?
 * 4 = medium  - ?
 * 5 = medium+ - ?
 * 6 = large   - between groups of content that aren't related?
 * 7 = huge    - ?
 * 8 = massive - an uncomfortable amount of whitespace
 */
export const spacing = {
    veryTiny: 4,
    semiTiny: 6,
    mediumTiny: 8,
    tiny: 10,
    verySmall: 12,
    semiSmall: 14,
    mediumSmall: 16,
    small: 18,
    semiMedium: 20,
    medium: 24,
    semiLarge: 28,
    mediumLarge: 32,
    large: 36,
    semiBig: 40,
    big: 44,
    semiHuge: 50,
    huge: 60,
    veryHuge: 80,
    megaHuge: 90,
};
