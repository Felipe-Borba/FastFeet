const InputSelect = () => {
    return (
        <label for="roles">
            Escolha um cargo:
            <select name="role" id="roles">
                <option value="admin">Admin</option>
                <option value="entregador">Entregador</option>
            </select>
        </label>
    )
}


export default InputSelect