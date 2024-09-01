export default function QuoteForm() {
    return (
      <form className="font-Poppins h-[400px]">
        <h2 className="text-lg">Welcome on board!</h2>
        <p className="w-[40ch] text-center mt-4">We just need a little bit of data from you to get you started!</p>
  
        <div className="flex gap-10 mt-3">
          <div className="control">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="first-name" />
          </div>
  
          <div className="control">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="last-name" />
          </div>
        </div>

        <hr />

        <div className="control">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" />
        </div>
  
        <div className="control mt-3">
          <label htmlFor="terms-and-conditions">
            <input type="checkbox" id="terms-and-conditions" name="terms" />I
            agree to the terms and conditions
          </label>
        </div>
  
        <p className="form-actions">
          <button type="reset" className="button button-flat">
            Reset
          </button>
          <button type="submit" className="button">
            Request Assitance
          </button>
        </p>
      </form>
    );
  }