
-- Example of disabling some plugins. Add yours
local disabled = {
  {
    "akinsho/bufferline.nvim",
  },
  {
    "nvim-lualine/lualine.nvim",
  },
  {
    "williamboman/mason-lspconfig.nvim",
  },
  {
    "williamboman/mason-lspconfig.nvim",
  },
  {
    "Exafunction/codeium.nvim",
  },
}

for i, plugin in ipairs(disabled) do
  plugin.enabled = false
end

return disabled