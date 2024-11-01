
-- Example of disabling some plugins. Add yours
local disabled = {
  {
    "williamboman/mason-lspconfig.nvim",
  },
  {
   "Exafunction/codeium.vim",
  },
  {
    "wakatime/vim-wakatime"
  }
}

for i, plugin in ipairs(disabled) do
  plugin.enabled = false
end

return disabled
