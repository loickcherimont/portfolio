export function Field(props) {
    const {id} = props;
    return <div>
        <label htmlFor={id} className="text-slate-700">{id.toUpperCase()}</label>
        {id === "message" ? <textarea id="message" placeholder="Votre message" className="block w-full bg-slate-100 p-1 placeholder:italic" title="Message" /> : <input {...props} className="block w-full bg-slate-100 p-1 placeholder:italic" title={`Votre ${id}`} />}
    </div>
}