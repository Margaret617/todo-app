import InputField from './components/InputField'
import PageTitle from './components/PageTitle'
import PrimaryButton from './components/PrimaryButton'

const App = () => {
  return (
    <main>
      <PageTitle text={"My Todo App"} />
      <form>
				<InputField/>
        <PrimaryButton/>
			</form>
      <div className ="todos-container"></div>
    </main>
  )
}

export default App