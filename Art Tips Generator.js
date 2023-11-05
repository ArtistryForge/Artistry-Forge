// Define an array of art tips
const artTips = [
    "Experiment with different mediums to discover your style.",
    "Don't be afraid to make mistakes; they can lead to breakthroughs.",
    "Study the work of famous artists for inspiration.",
    "Learn the basics of color theory to enhance your compositions.",
    "Practice regularly to improve your skills.",
    "Try sketching from life to develop your observational abilities.",
    "Use reference images to help with complex subjects.",
    "Stay patient and persistent; progress takes time.",
    "Share your art with others to get feedback and learn.",
    "Create a dedicated art space to stay organized and inspired.",
    "Take breaks during long creative sessions to avoid burnout.",
    "Experiment with different brush types and sizes in digital art.",
    "Learn about composition techniques like the rule of thirds.",
    "Don't limit yourself to realistic art; explore abstract and surreal styles too.",
    "Keep a sketchbook to capture ideas and practice on the go.",
    "Explore various art communities online to connect with other artists.",
    "Study anatomy for more accurate figure drawing.",
    "Consider taking art classes or workshops to learn new skills.",
    "Don't chase perfection; art is about self-expression and growth.",
    "Explore art history to gain insights from the masters of the past.",
    "Explore and embrace a variety of art mediums, such as watercolor, acrylics, and digital art.",
    "Learn about color theory to create harmonious and visually appealing color palettes.",
    "Use reference images to improve your understanding of complex subjects and scenes.",
    "Experiment with lighting and shading to add depth and dimension to your artwork.",
    "Don't be afraid to redraw or rework your art to make improvements.",
    "Analyze the work of your favorite artists to gain inspiration and insights.",
    "Practice drawing from life to enhance your observational skills.",
    "Keep a visual journal for recording ideas, sketches, and art-related thoughts.",
    "Participate in art challenges and prompts to boost your creativity.",
    "Share your work on social media and art platforms to get feedback and exposure.",
    "Mistakes are part of the creative process; embrace them as learning opportunities.",
    "Push your creative boundaries by trying art styles different from your comfort zone.",
    "Stay patient and persistent in your art journey; improvement takes time.",
    "Explore techniques like cross-hatching and stippling for unique textural effects in drawings.",
    "Consider creating your own art website or portfolio to showcase your work professionally.",
    "Experiment with different brushes and brush techniques to create various textures in your digital art.",
    "Learn to simplify complex subjects by breaking them down into basic shapes and forms.",
    "Study anatomy to improve your figure and character drawing skills.",
    "Incorporate storytelling elements into your art to engage your audience and convey a message.",
    "Practice drawing or painting in black and white to enhance your understanding of value and contrast.",
    "Don't focus solely on the end result; enjoy the process of creating art.",
    "Challenge yourself with daily or weekly art goals to maintain a consistent practice.",
    "Create a mood board or Pinterest collection of inspiring images and artwork for reference.",
    "Keep a sketchbook for quick, spontaneous sketches and ideas on the go.",
    "Observe the world around you and draw everyday objects or scenes to develop your observational skills.",
    "Join art communities or forums to connect with fellow artists and gain valuable feedback.",
    "Use a limited color palette to create a cohesive and visually striking composition.",
    "Practice drawing hands and feet, as they can be challenging but are essential for character illustrations.",
    "Keep your art supplies organized to save time and stay motivated.",
    "Invest in high-quality art materials when you can; they can make a noticeable difference in your work.",
    "Don't be afraid to make mistakes; they're an essential part of the learning process.",
    "Try working with unconventional materials or techniques to spark creativity.",
    "Create a dedicated workspace for your art to get in the right mindset.",
    "Study color theory to understand how colors work together and evoke emotions.",
    "Draw from life whenever possible to improve your observation and rendering skills.",
    "Use references to enhance your accuracy and add realism to your art.",
    "Don't compare your progress to others; focus on your own improvement.",
    "Experiment with different art styles to find one that suits your preferences.",
    "Practice drawing or painting the same subject from multiple angles to master it.",
    "Learn the principles of composition to create balanced and visually pleasing artwork.",
    "Incorporate light and shadow to add depth and dimension to your pieces.",
    "Embrace constructive criticism and feedback to grow as an artist.",
    "Consider keeping a visual journal to record ideas, sketches, and inspirations.",
    "Regularly revisit your older artwork to see your progress and areas of improvement.",
    "Set achievable goals for your art, such as finishing a certain number of pieces per month.",
];

// Function to generate a random art tip
function generateArtTip() {
    const randomIndex = Math.floor(Math.random() * artTips.length);
    const tipDisplay = document.getElementById("tip-display");
    tipDisplay.textContent = artTips[randomIndex];
}

// Add a click event listener to the "Generate Art Tip" button
const generateButton = document.getElementById("generate-button");
generateButton.addEventListener("click", generateArtTip);

const returnButton = document.getElementById("return-button");

        returnButton.addEventListener("click", function() {
            window.location.href = "index.html";
        });
