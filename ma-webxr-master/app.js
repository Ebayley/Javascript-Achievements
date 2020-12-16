// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(0, 1.54, -5);
minecraftModel.setScale(0.1, 0.1, 0.1);
minecraftModel.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);
sphere.addEventListener('click', () => sphere.setColor('red'));
sphere.addEventListener('click', () => blah());
function blah() {    
    const sphereText = new Text("ik weet niet wat ik verder\nmoet doen om het\n'werkend te krijgen'");
    sphereText.setPosition(-9, 3, -5);
    sphereText.setFontsize(4);
    sphereText.setColor('white')    
}
// create some text
const testText = new Text('Mediacollege Amsterdam WebXR');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(10);

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-1.48819, 5, -5);

// create a 360 image
const image360 = new Sky('assets/360_world.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));


// const image360 = new Sky('assets/images.FolkertdeJong.jpg');

// const image2 = new XRImage('assets/images/Lisse-049.jpg');
// image2.setPosition(-1.48819, 0.88128, -2.76627);





















