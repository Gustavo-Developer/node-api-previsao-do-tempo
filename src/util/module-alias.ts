import * as path from "path";
import moduleAlias from "module-alias";

// __dirname = diretorio atual
const files = path.resolve(__dirname, "../..");

// Setando modulos
// Permite que eu importe as pastas usando apenas '@'
moduleAlias.addAliases({
  "@src": path.join(files, "src"),
  "@test": path.join(files, "test"),
});
