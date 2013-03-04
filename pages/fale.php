<div class="fale boxWhite">
    <h2>Fale Conosco</h2>
    <h3>
        Sua trajetória pode abrir caminho<br />
        para milhares de outras mulheres
    </h3>
    <small>*Campos de preenchimento obrigatório</small>
    <h3 id="warning"></h3>
    <form method="post" class="frm" id="frmFale" action="#">
        <div class="bloco">
            <div class="blocoFrm">
                <label for="fale_nome">Nome*</label>
                <input title="Nome" placeholder="Nome fantasia" type="text" name="fale[nome]" id="fale_nome" class="required" required>
            </div>
            <div class="blocoFrm">
                <label for="fale_empresa">Empresa*</label>
                <input title="Empresa" placeholder="Nome da empresa" type="text" name="fale[empresa]" id="fale_empresa"  class="required" required>
            </div>
            <div class="blocoFrm">
                <label for="fale_email">E-mail*</label>
                <input title="E-mail" placeholder="@" type="text" name="fale[email]" id="fale_email"  class="required email"required>
            </div>
        </div>
        <div class="bloco">
            <div class="blocoFrm">
                <label for="fale_ddd">Telefone*</label>
                <input class="ped" title="DDD" placeholder="(__)" type="text" name="fale[ddd]" id="fale_ddd" class="required" minlength="3" required>
                <input class="med" title="Telefone" placeholder="(_________)" type="text" name="fale[telefone]" id="fale_telefone" class="required" required>
            </div>
            <div class="blocoFrm">
                <label for="fale_ddd_celular">Celular*</label>
                <input class="ped" title="DDD" placeholder="(__)" type="text" name="fale[ddd_celular]" id="fale_ddd_celular" class="required" minlength="3" required>
                <input class="med" title="Celular" placeholder="(_________)" type="text" name="fale[celular]" id="fale_celular" class="required" required>
            </div>
            <div class="blocoFrm">
                <label for="fale_cidade">Cidade/Estado*</label>
                <input class="med med-rev" title="Cidade" type="text" name="fale[cidade]" id="fale_cidade" class="required" required>
                <select class="ped ped-rev Styled" name="fale[uf]" id="fale_uf" class="required" required>
                    <option value="AC">AC</option>
                    <option value="AL">AL</option>
                    <option value="AM">AM</option>
                    <option value="AP">AP</option>
                    <option value="BA">BA</option>
                    <option value="CE">CE</option>
                    <option value="DF">DF</option>
                    <option value="ES">ES</option>
                    <option value="GO">GO</option>
                    <option value="MA">MA</option>
                    <option value="MG">MG</option>
                    <option value="MS">MS</option>
                    <option value="MT">MT</option>
                    <option value="PA">PA</option>
                    <option value="PB">PB</option>
                    <option value="PE">PE</option>
                    <option value="PI">PI</option>
                    <option value="PR">PR</option>
                    <option value="RJ">RJ</option>
                    <option value="RN">RN</option>
                    <option value="RO">RO</option>
                    <option value="RR">RR</option>
                    <option value="RS">RS</option>
                    <option value="SC">SC</option>
                    <option value="SE">SE</option>
                    <option value="SP">SP</option>
                    <option value="TO">TO</option>
                </select>
            </div>
        </div>
        <div class="bloco">
            <div class="blocoFrm">
                <label for="fale_comentario">Comentário*</label>
                <textarea title="Comentário" placeholder="Escreva sua mensagem" id="fale_comentario" class="required" required></textarea>
            </div>
            <div class="blocoFrm act">
                <button type="submit" class="bt-inscreva-se">Enviar</button>
            </div>

        </div>
    </form>
</div>