const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('./Resources/Public/Frontend/build')

    .setPublicPath('/_Resources/Static/Packages/Qf.Hlk/Frontend/build')

    .setManifestKeyPrefix('')

    .addEntry('app',  './Resources/Private/Assets/js/app.js')

    .enableSingleRuntimeChunk()

    .copyFiles({
        from: './Resources/Private/Assets/icons',
        to: 'images/[path][name].[ext]'
    })
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })
    .configureFontRule({
        filename: 'fonts/[name][ext]'
    })

    .enableSassLoader()
;

module.exports = Encore.getWebpackConfig();
