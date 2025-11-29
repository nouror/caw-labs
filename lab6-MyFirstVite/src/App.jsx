import ProfileCard from "./components/ProfileCard";
function App() {
  return (
    <div>
      <h1>My Team</h1>
      {/* Reusing the component with different props */}
      <ProfileCard
        name="Adil Chekati"
        role="Senior Lecturer"
        email="adil.chekati@univ-constantine2.dz"
      />
      <ProfileCard
        name="Boumezbeur Nour El Imene"
        role="STIC Student"
        email="nourelimeneboumezbeur@gmail.com"
      />
      <ProfileCard
        name="Mohamed Amin Bouchehed"
        role="Frontend Engineer"
        email="aminlazir@gmail.com"
      />
    </div>
  );
}
export default App;