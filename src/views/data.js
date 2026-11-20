// Content from the Figma mockups (Lab 1). Used by the EJS templates at build time.

export const site = {
  name: 'Recipe Finder',
  year: 2026,
  nav: [
    { id: 'home', href: './index.html', label: 'Home', i18n: 'nav.home' },
    { id: 'recipes', href: './recipes.html', label: 'Recipes', i18n: 'nav.recipes' },
    { id: 'favorites', href: './favorites.html', label: 'Favorites', i18n: 'nav.favorites' },
  ],
  social: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'camera' },
    { label: 'Pinterest', href: 'https://www.pinterest.com/', icon: 'pin' },
    { label: 'YouTube', href: 'https://www.youtube.com/', icon: 'play' },
  ],
};

export const categories = [
  { id: 'breakfast', label: 'Breakfast', image: 'category-breakfast' },
  { id: 'lunch', label: 'Lunch', image: 'category-lunch' },
  { id: 'dinner', label: 'Dinner', image: 'category-dinner' },
  { id: 'desserts', label: 'Desserts', image: 'category-desserts' },
];

export const recipes = [
  {
    id: 1,
    title: 'Strawberry Pancakes',
    image: 'strawberry-pancakes',
    alt: 'Stack of pancakes topped with strawberries and maple syrup',
    category: 'Breakfast',
    description: 'Fluffy pancakes with fresh strawberries.',
    time: 30,
    difficulty: 'Easy',
  },
  {
    id: 2,
    title: 'Creamy Tomato Pasta',
    image: 'creamy-tomato-pasta',
    alt: 'Penne in a creamy tomato sauce with grated parmesan',
    category: 'Dinner',
    description: 'Creamy pasta with a rich tomato sauce.',
    time: 25,
    difficulty: 'Easy',
  },
  {
    id: 3,
    title: 'Avocado Toast',
    image: 'avocado-toast',
    alt: 'Toast with smashed avocado, radish and microgreens',
    category: 'Breakfast',
    description: 'Crunchy toast with creamy avocado.',
    time: 10,
    difficulty: 'Easy',
  },
  {
    id: 4,
    title: 'Chicken & Rice Bowl',
    image: 'chicken-rice-bowl',
    alt: 'Bowl of sliced chicken with rice and fresh vegetables',
    category: 'Lunch',
    description: 'Tender chicken with rice and vegetables.',
    time: 35,
    difficulty: 'Medium',
  },
  {
    id: 5,
    title: 'Roasted Vegetable Salad',
    image: 'roasted-vegetable-salad',
    alt: 'Salad with roasted vegetables, greens and seeds',
    category: 'Lunch',
    description: 'Roasted vegetables with a light dressing.',
    time: 20,
    difficulty: 'Easy',
  },
  {
    id: 6,
    title: 'Berry Yogurt Parfait',
    image: 'berry-yogurt-parfait',
    alt: 'Glass of yogurt layered with berries and granola',
    category: 'Desserts',
    description: 'Creamy yogurt with berries and granola.',
    time: 10,
    difficulty: 'Medium',
  },
];

export const recipeDetails = {
  ...recipes[0],
  summary: 'Fluffy pancakes with fresh strawberries and maple syrup.',
  prepTime: 10,
  cookTime: 20,
  servings: 2,
  ingredients: [
    '150 g all-purpose flour',
    '200 ml milk',
    '1 egg',
    '1 tbsp sugar',
    '1 tsp baking powder',
    '150 g strawberries',
    'Butter for cooking',
    'Maple syrup to serve',
  ],
  steps: [
    { title: 'Mix the dry ingredients', text: 'Combine flour, sugar and baking powder in a bowl.' },
    { title: 'Make the batter', text: 'Whisk the milk and egg, then stir into the dry ingredients until just combined.' },
    { title: 'Cook the pancakes', text: 'Heat a lightly buttered pan. Cook small portions of batter until bubbles appear, then flip and cook until golden.' },
    { title: 'Serve and enjoy', text: 'Top with sliced strawberries and drizzle with maple syrup.' },
  ],
  tip: 'Let the batter rest for 5 minutes for extra fluffy pancakes.',
  similar: [3, 6],
};

export const favoriteIds = [1, 2, 3, 6];
export const recentIds = [1, 2, 3];
export const featuredId = 1;
export const kitchenIngredients = ['Tomatoes', 'Pasta', 'Cheese'];
